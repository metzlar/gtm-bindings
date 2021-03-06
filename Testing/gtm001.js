//=========================================================================
//
//  Copyright OSEHRA
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//         http://www.apache.org/licenses/LICENSE-2.0.txt
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//=========================================================================*/


// load gtm module
var gtm = require('gtm');

// create gtm database connection
var db = new gtm.Database();

console.log("\n");
console.log('Node.js Version: ' + process.version);

var version = db.version();

console.log('Version: ' + version );

var about = db.about();

console.log('About: ' + about );

