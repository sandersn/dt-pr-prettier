const assert = require('assert')
const fs = require('fs')
const dtPath = "../../DefinitelyTyped/types"
assert(fs.existsSync(dtPath), "Can't find Definitely Typed at " + dtPath)
for (const d of fs.readdirSync(dtPath)) {
    console.log('Running prettier on', d)
    // Actually run prettier
    // Add to list if prettier caused a diff and if there is no open PR that covers this directory
    // Stop when the list has 10 elements
    // Then create a PR
    break
}
