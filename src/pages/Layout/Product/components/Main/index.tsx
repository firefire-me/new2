import {useHistory, useParams} from 'umi'
import './index.less'

type Props = {
    product: 
        {
            id:string,
            title: string,
            profit: string,
            mold: string,
            bgc: string
        }[]
    
}

const ProductMain = (props: Props) => {
    const history = useHistory()

    return (
        <div>
            <div className="productMain">
            <ul>
                {
                    props.product.map(item => (
                        <li  onClick={() => history.push(`details/?id=${item.id}`)}>
                    <a href="">
                        <div style={{backgroundColor: item.bgc}}></div>
                        <h3>{item.title}</h3>
                        <p> <span>{item.profit}</span>{item.mold}</p>
                    </a>
                </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}
export default ProductMain