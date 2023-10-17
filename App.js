// const heading = React.createElement(
//     'h1', 
//     {id:"heading", xyz: "abc"}, 
//     ' Hello World!');

const parent = React.createElement(
    'div', 
    {id:"parent"}, 
    [React.createElement(
        'div', 
        {id:"child"},[
        React.createElement(
            'h1', 
            {},
            "I am the first child "
        ),
        React.createElement(
            'h2', 
            {},
            "I am the first child ")]
    ),
    React.createElement(
        'div', 
        {id:"child"},[
        React.createElement(
            'h1', 
            {},
            "I am the second child "
        ),
        React.createElement(
            'h2', 
            {},
            "I am the second child ")]
    )
]
);

const root = ReactDOM.createRoot( document.getElementById('root'));

root.render(parent);