import React from 'react'
import "../Styles/ServiceFooter.css"

const Service_Footer = () => {
return (
<>
<div className="Service_Main">
<div className="Service1" >
<div className="Service2_main">
<span className="Service2">100%</span>
<p className="Service2_para" >Client Satisfaction</p>
</div>
<div className="Service2_main">
<span className="Service_2" >2+</span>
<p className="Service2_para">Years into the Business </p>
</div>
<div className="Service2_main" >
<span className="Service2" >7+</span>
<p className="Service2_para" >Years of Expertise</p>
</div>
<div className="Service2_main">
<span className="Service2">67+</span>
<p className="Service2_para" >Projects Completed</p>
</div>
<div className="Service2_main">
<span className="Service2" >70+</span>
<p className="Service2_para">client Served</p>
</div>
</div>
<div>
<button className="Service_button">Known More</button>
</div>
</div>
</>
)
}

export default Service_Footer