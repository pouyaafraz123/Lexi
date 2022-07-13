const MyMap = (props) => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      // width="445"
      height="250"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDWJ2xIW3MkUm_tMv71oZAqkTl3dyPNT1c
    &q=Space+Needle,Seattle+WA"
    ></iframe>
  );
};

export default MyMap;
