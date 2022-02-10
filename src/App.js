import logo from './logo.svg';
import './App.css';
import ReviewItems from "./Reviews";
import PropTypes from 'prop-types';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk/>
      <Produk isDiscount="yes" name="Es Teh Sisri Cekek" category="Jajanan"/>
      <ReviewItems />
    </div>
  );
}

function FotoProduk(){
  return (
      <div className="Foto">
        <img src="es-cekek.jpg"></img>
      </div>
  );
}

function CheckDiscount(props){
  const {isDiscount, discount} = props;
  if(isDiscount == "yes"){
    return(
      <p>Diskon {discount}% Off</p>
    );
  }
  else if(isDiscount == "coming"){
    return(
      <p>Akan ada diskon setiap pembelian 2 pcs atau lebih</p>
    );
  }
  else{
    return(
      <p>Belum ada diskon</p>
    );
  };
}

function Produk(props){

  const {name, category, isDiscount} = props;
  const benefits = ["Manis rasanya", "Sangat dingin", "Dengan teh asli pilihan"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );

  return (
    <div>
      <div className="Deskripsi">
        <p className="Ctgry">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 2.000,00</p>
        <CheckDiscount isDiscount={isDiscount} discount={50}/>
        <p className="Info">
          Siang-siang panas enaknya minum Es Teh Cekek, agar lehermu tidak tercekek oleh panasnya cuaca Indonesia serta panasnya omongan tetangga. Segera dapatkan Es Teh Cekek di warung-warung terdekat kesayangan anda, kalau dekat namun tidak sayang maka itu derita anda.
        </p>
        <ul>
          <li>
            {listBenefits}
          </li>
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Beli Gan</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  console.log("Membeli Produk " + e)
}

CheckDiscount.propTypes = {
  discount: PropTypes.number
};

export default App;
