const questions = [
    {
        type: 'input',
        message:'Please enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message:'Please enter a project description:',
        name: 'description'
    },
    {
        type: 'input',
        message:'Please enter any installation requirements:',
        name: 'installation'
    },
    {
        type: 'input',
        message:'Please enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message:'Please enter the required license (if none, click "enter"):',
        name: 'license'
    },
    {
        type: 'input',
        message:'Please enter the contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message:'Please enter the test instructions:',
        name: 'test'
    },
    {
        type: 'input',
        message:'Please enter your github username:',
        name: 'github'
    },
    {
        type: 'input',
        message:'Please enter your email address:',
        name: 'email'
    },
]

module.exports = {
    questions:questions
}