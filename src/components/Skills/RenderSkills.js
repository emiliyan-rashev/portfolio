import ContentLoader from "react-content-loader";
import React from "react";

function RenderSkills({ data, skillsIsLoading }) {
    const page_descr =  <>
        <h3 align="center" className="section_header">Skills</h3>
    </>;
    if (skillsIsLoading) {
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
        const skills = data.map((obj) => 
        <div className="accordion-item" key={data.indexOf(obj)}>
            <h3 className="accordion-header" id={'header' + data.indexOf(obj)}>
                <button className="accordion-button collapsed title_text" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse_skill' + data.indexOf(obj)} aria-expanded="false" aria-controls={'#collapse_skill' + data.indexOf(obj)}>
                    {obj.skill_name}
                </button>

            </h3>
            <div id={'collapse_skill' + data.indexOf(obj)} className="accordion-collapse collapse" aria-labelledby={'heading' + data.indexOf(obj)} data-bs-parent="#skill">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html : obj.skill_description }} />
            </div>
        </div>
            );
        return (
            <>
                {page_descr}
                <div className="accordion" id="skill">
                    {skills}
                </div>
            </>
        )
    }
}

export default RenderSkills
