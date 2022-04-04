import React from 'react';

const BlogAnswer = () => {
    return (
        <div style={{ margin: '0 1%' }}>
            <h2 className='font-bold text-2xl'>Q1.What is context api?</h2>
            <p className='font-semibold'><span className='font-bold'>Answer:</span>Context api is used to solve the problem of prop drilling.
                earlier we used to pass props from parent to children with the help of those components which are at the in between level of parent and the child.For example if we want to pass prop from parent a to child c who is also a child of B we would pass the data to B and it would pass it to C.But Context api allows us to pass the prop from directly A to C without the Help of Component B or any Other Component </p>
            <br />
            <h2 className='font-bold text-2xl'>Q2.What is Semantic Tag?</h2>
            <p className='font-semibold'><span className='font-bold'>Answer:</span>Semantic tags are those that clearly describe their meaning in a human and machine-readable way.
                by seeing these tags it is easy to understand what is the content inside the tags or what the tag is meaning.It is also helpful for SEO and important for Ranking.For example Header it is easy to understand that its position is ate the top of a website.Footer it is easy to understand that it is situated at the bottom position of website </p>
            <br />
            <h2 className='font-bold text-2xl'>Q3.Inline Vs Inline Block</h2>
            <p className='font-semibold'><span className='font-bold'>Answer:
            </span>Inline displays an element as an inline element.The element does not start on a new line and only occupies just width it requires.it's width and height can't be set.
                Example: span, a, img etc.
                <br></br>
                In Inline Block the element starts on a new line and occupies the full width available.Height and Width can be set.
                Inline Block displays an element as an inline-level block container.</p>

        </div>
    );
};

export default BlogAnswer;