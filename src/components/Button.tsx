import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <StyledWrapper>
      <button>
        {text}
        <div className="star-1">{starSVG}</div>
        <div className="star-2">{starSVG}</div>
        <div className="star-3">{starSVG}</div>
        <div className="star-4">{starSVG}</div>
        <div className="star-5">{starSVG}</div>
        <div className="star-6">{starSVG}</div>
      </button>
    </StyledWrapper>
  );
};

const starSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    version="1.1"
    viewBox="0 0 784.11 815.53"
  >
    <g>
      <path
        className="fil0"
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
        207.96,29.37 371.12,197.68 392.05,407.74 
        20.93,-210.06 184.09,-378.37 392.05,-407.74 
        -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      />
    </g>
  </svg>
);

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 12px 35px;
    font-size: 17px;
    font-weight: 1000;
    background: none;        /* ❌ ไม่มีพื้นหลัง */
    border: none;            /* ❌ ไม่มีขอบ */
    outline: none;           /* ❌ ไม่มีเส้นรอบตอน focus */
    color: #ffffff;          /* ✔ ตัวอักษรสีขาว */
    cursor: pointer;
  }

  .star-1,
  .star-2,
  .star-3,
  .star-4,
  .star-5,
  .star-6 {
    position: absolute;
    filter: drop-shadow(0 0 0 #ffffff); /* ให้ดาวเป็นสีขาว */
    z-index: -5;
  }

  .star-1 {
    top: 20%;
    left: 20%;
    width: 25px;
    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }

  .star-2 {
    top: 45%;
    left: 45%;
    width: 15px;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-3 {
    top: 40%;
    left: 40%;
    width: 5px;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-4 {
    top: 20%;
    left: 40%;
    width: 8px;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-5 {
    top: 25%;
    left: 45%;
    width: 15px;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  .star-6 {
    top: 5%;
    left: 50%;
    width: 5px;
    transition: all 0.8s ease;
  }

  /* Hover ทำเฉพาะดาว ไม่ต้องเปลี่ยนพื้นหลังปุ่ม */
  button:hover .star-1 {
    top: -80%;
    left: -30%;
    z-index: 2;
  }

  button:hover .star-2 {
    top: 0;
    left: 10%;
    z-index: 2;
  }

  button:hover .star-3 {
    top: 55%;
    left: 25%;
    z-index: 2;
  }

  button:hover .star-4 {
    top: 30%;
    left: 80%;
    z-index: 2;
  }

  button:hover .star-5 {
    top: 25%;
    left: 115%;
    z-index: 2;
  }

  button:hover .star-6 {
    top: 5%;
    left: 60%;
    z-index: 2;
  }

  .fil0 {
    fill: #3300ffff; /* ดาวเป็นสีขาว */
  }
`;

export default Button;
