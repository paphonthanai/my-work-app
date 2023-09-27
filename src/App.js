import './App.css';

const user = {
  name: 'Paphonthanai Jaima',
  ImageUrl: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/327362250_1386640432091464_964266391241259568_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeEu9y0S5MJXwNvR3oD7ZW6YhcNSeTFBbgaFw1J5MUFuBn9K25P1o96dwwJe-f-9lDv-xfXRsLIJD6MGFBnw4iip&_nc_ohc=ifkLhIEwyeEAX-ohThk&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfALaXU0FR6aZyQL_zYj6348b9I0HWWs9mU62aOGUkyYww&oe=6517379B',
  ImageSize: 90,
};


function MyButton() {
  return (
    <button> Les't Go </button>
  );
}

function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className='avatar'
        src={user.ImageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.ImageSize,
          height: user.ImageSize
        }}
      />
    </>
    // <div>
    //     <MyButton />
    // </div>  
  );
}

export default function Profile() {
  return (
    <>
      <App />
      <MyButton />
    </>
    // <>
    //   <h1>{user.name}</h1>
    //   <img 
    //     className='avatar'
    //     src={user.ImageUrl}
    //     alt={'Photo of' + user.name}
    //     style={{
    //       width: user.ImageSize,
    //       height: user.ImageSize
    //     }}
    //   />
    // </>
  );
}
