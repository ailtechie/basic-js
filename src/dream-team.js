const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = '';
 console.log(members.length);
 console.log(typeof(members[0]));
 console.log(members[0][0].toUpperCase())
  for(i = 0; i < members.length; i++) {
  	if(typeof(members[i]) === 'string') {
    	team = team + members[i][0];
    }
  }
  return team.length > 0 ? team.split('').sort().join('') : false;
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
