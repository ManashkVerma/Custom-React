function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
    
    /* VERSION - 1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: "_black"
    },
    children: 'Click me to visit google' 
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer);
