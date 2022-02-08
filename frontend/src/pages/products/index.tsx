import { CardProduct } from 'components/CardProduct';
import { FormSearch } from 'components/FormSearch';
import { Header } from 'components/Header';

const Products: React.FC = () => {
  return (
    <div>
      <Header />
      <FormSearch />
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mt-4 g-2'>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
