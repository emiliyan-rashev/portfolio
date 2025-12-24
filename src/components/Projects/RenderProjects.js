import ContentLoader from "react-content-loader";
import React from "react";

function RenderProjects({ data, projectsIsLoading }) {
    const page_descr = <>
        <h3 align="center" className="section_header">Projects</h3>
        <p className="title_text">
            This section showcases my projects, with <b>Django Cashier App</b> being my current favourite.<br/>
            The project originated as part of the final assignment in the Python Web Developer program at SoftUni and evolved significantly through iterative refactoring and improvement.<br/>
            It allowed me to bring to life an idea I had even before the course — digitising a complex manual process where calculations were error-prone and inconsistently performed.
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
