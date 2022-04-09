import "./categories.css"
function Categories({ image, cate }) {
    return (
        <div className="categories">
            <img src={image} alt="" />
            <b>{cate}</b>
        </div>
    )
}
export default Categories;