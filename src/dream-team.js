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
  if(!Array.isArray(members)) return false;
  if(members.length === 0) return false;
  let team = '';
  for(i = 0; i < members.length; i++) {
  	if(typeof(members[i]) === 'string') {
      let trim = members[i].trim();
    	team = team + trim[0].toUpperCase();
    }
  }
  return team.length > 0 ? team.split('').sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
