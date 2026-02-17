import '../css/page_header.css';

export default function PageHeader({ title, path, name, bgImage }) {

    const headerStyle = bgImage ? {
        backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.9), rgba(10, 10, 10, 0.9)), url(${bgImage})`
    } : {};

    return (
        <div className="page-header" style={headerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{title}</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href={path}>{name}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}