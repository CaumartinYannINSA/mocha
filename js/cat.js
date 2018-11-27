module.exports = function(s)
{
    if(typeof(s) != 'string')
    {
        throw new Error('not a string');
    }

    return "Bonjour " + s;
}
