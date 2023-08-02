const query = {
    SELECT_SITE1S: 'SELECT  * FROM site1 order by Timestamp DESC',
    SELECT_SITE1: 'SELECT  * FROM site1 WHERE id=?',
    CREATE_SITE1: 'INSERT INTO site1(sitename,email,TEMPERATURE,WINDSPEED) VALUES(?,?,?,?)',
    UPDATE_SITE1: 'UPDATE site1 SET sitename=?,email=?,TEMPERATURE=?,WINDSPEED=? WHERE id=?',
    DELETE_SITE1: 'DELETE FROM site1 WHERE id=?'
};
module.exports=query