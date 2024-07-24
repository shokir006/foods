function About() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-2xl mb-4 ">Bizning restaranimizga tashrif buyuring</h1>
    
      <section className="text-gray-600 body-font relative h-96">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39688.21554554021!2d67.86945285672589!3d40.13170271501443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29440993de979%3A0x2113f1bd8345473f!2sCentral%20Stadium%20Sogdiana%2C%20Jizzakh%2C%20Jizzakh%20Region%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1721642655459!5m2!1suz!2s"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
        </div>
        <div className="about">
         
        </div>
      </section>
    </div>
  );
}

export default About;
