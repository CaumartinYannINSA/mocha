module.exports = function(number)
{
    if(number < 0 || typeof(number) != 'number')
    {
        throw new Error('not an int');
    }
    return (number%2 == 0);
}
