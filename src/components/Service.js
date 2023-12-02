
//made this component as an example to show how we can seprate evrything in smaller components
export const Service = ({ id, icon, title, text, children }) => {
    // console.log(children);
    return (
        <article className="service" key={id}>
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                    {text}
                </p>
            </div>
            {/* <span>{children}</span> */}
        </article>
    )
}