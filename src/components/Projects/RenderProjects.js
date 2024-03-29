import ContentLoader from "react-content-loader";
import React from "react";

function RenderProjects({ data, projectsIsLoading }) {
    const page_descr = <>
        <h3 align="center" className="section_header">Projects</h3>
        <p className="title_text">
        These are my projects and my current favourite one is <b>Django Cashier App</b>.<br/>
        This was my first project and it was the last part of the full Python Web Developer course at SoftUni.<br/>
        I went through a lot of things to build it and I really enjoyed refactoring my code through the course and making it better and better.<br/>
        I also had the chance to realise an idea that I had even before the course - to digitise a process that was quite complicated and mistakes were often made, as all calculations were made by hand.
        </p>
    </>;
    if (projectsIsLoading) {
        return (
            <>
                {page_descr}
                <ContentLoader
                    speed={2}
                    width="100%"
                    height={160}
                    backgroundColor="#d9d9d9"
                    foregroundColor="#ededed">
                    <rect x="0" y="0" rx="4" ry="4" width="98%" height="38" />
                    <rect x="0" y="50" rx="4" ry="4" width="98%" height="38" />
                    <rect x="0" y="100" rx="4" ry="4" width="98%" height="38" />
                </ContentLoader>
            </>
        )
    } else {
        const projects = data.map((obj) => 
        <div className="accordion-item" key={data.indexOf(obj)}>
            <h3 className="accordion-header" id={'header' + data.indexOf(obj)}>
                <button className="accordion-button collapsed title_text" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + data.indexOf(obj)} aria-expanded="false" aria-controls="collapse{{ curr_project.id }}">
                    {obj.project_name}
                </button>
            </h3>
            <div id={'collapse' + data.indexOf(obj)} className="accordion-collapse collapse" aria-labelledby={'heading' + data.indexOf(obj)} data-bs-parent="#project">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html : obj.project_description }} />
                {obj.link_to_project ? <div className="accordion-body"><a href={obj.link_to_project} target="_blank">Link to project</a></div> : ''}
            </div>
        </div>
            );
        return (
            <>
                {page_descr}
                <div className="accordion" id="project">
                    {projects}
                </div>
            </>
        )
    }
}

export default RenderProjects