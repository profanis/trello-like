import * as fs from 'fs';
import * as path from 'path';


export const loadGQLFile = (type: any) => {
  const filePath = path.join(__dirname, '../api', type)
  return fs.readFileSync(filePath, 'utf-8')
}