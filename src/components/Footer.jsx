import React from "react";
import { BsDiscord, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="sm:h-[35vh] text-white flex flex-col items-center text-center gap-5 py-10 border-t  mt-20 px-5">
      <div>
        <ul className="flex flex-row gap-3">
          <li>Terms of Use</li>
          <li>Privacy-policy</li>
          <li>About</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="text-sm text-gray-300 sm:px-36">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum
        et ipsa maxime necessitatibus deserunt in cum cumque labore voluptatum
        dolore nostrum consectetur aliquam enim amet facere accusamus harum,
        accusantium totam. Accusamus itaque earum, voluptas praesentium fugiat
        eum, iure facere voluptates veniam nihil inventore corrupti,
        perspiciatis beatae molestias. Recusandae, in!
      </div>

      <div>
        <ul className="flex gap-5 text-xl">
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsDiscord />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
