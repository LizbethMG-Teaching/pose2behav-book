import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const students = ['EDA-students.ipynb', 'analysis_single-animal-students.ipynb', 'analysis_multi_animal-students.ipynb'];
const instructors = ['EDA-teaching.ipynb', 'analysis_single-animal.ipynb', 'analysis_multi_animal.ipynb', 'prepare-multi-animal-data.ipynb'];
const route = 'course-review-7d31c8b4a6e24f90b25d0197';
function walk(root) {
  return readdirSync(root, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(join(root,e.name)) : [join(root,e.name)]);
}
assert.deepEqual(readdirSync('notebooks').filter(f => f.endsWith('.ipynb')).sort(), [...students].sort(), 'Only approved student notebooks belong in the public notebooks directory');
for (const file of students) JSON.parse(readFileSync(join('notebooks',file),'utf8'));
const myst = readFileSync('myst.yml','utf8');
assert(!myst.includes(route), 'Solutions page must stay outside MyST navigation');
for (const match of myst.matchAll(/file:\s*(\S+)/g)) assert(existsSync(match[1]), `Missing TOC page: ${match[1]}`);
for (const file of [...walk('labs'), 'index.md', 'resources.md', 'syllabus.md']) {
  const content = readFileSync(file,'utf8');
  assert(!content.includes(route), `Unlisted route linked from ${file}`);
  for (const name of instructors) assert(!content.includes(name), `Instructor notebook referenced by ${file}`);
}
if (process.argv.includes('--built')) {
  const files = walk('_build/html');
  const pagePath = join('_build/html',route,'index.html');
  const page = readFileSync(pagePath,'utf8');
  assert(page.includes('name="robots" content="noindex, nofollow, noarchive"'));
  assert.equal((page.match(/class="button"/g)||[]).length, 3);
  for (const file of files) {
    assert(!instructors.some(name => file.includes(name)), `Instructor file published: ${file}`);
    if (file === pagePath || !/\.(html|json|xml|txt)$/.test(file)) continue;
    const content = readFileSync(file,'utf8');
    assert(!content.includes(route), `Route leaked into generated navigation/search/sitemap: ${file}`);
    for (const name of instructors) assert(!content.includes(name), `Instructor reference leaked into ${file}`);
  }
}
console.log('Solutions boundary and student structure checks passed.');
