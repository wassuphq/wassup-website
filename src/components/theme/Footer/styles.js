import styled from 'styled-components';
import footerBackground from 'assets/illustrations/footer-background.svg';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${footerBackground});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 2rem 0 2rem;
  }

  #mc_embed_signup form {
    text-align: center;
    padding: 10px 0 10px 0;
  }
  .mc-field-group {
    display: inline-block;
  } /* positions input field horizontally */
  #mc_embed_signup input.email {
    font-size: 15px;
    border: 1px solid #abb0b2;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #343434;
    background-color: #fff;
    box-sizing: border-box;
    height: 32px;
    padding: 0px 0.4em;
    display: inline-block;
    margin: 0;
    width: 350px;
    vertical-align: top;
  }
  #mc_embed_signup label {
    display: block;
    font-size: 16px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  #mc_embed_signup .clear {
    display: inline-block;
  } /* positions button horizontally in line with input */
  #mc_embed_signup .button {
    font-size: 13px;
    border: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    letter-spacing: 0.03em;
    color: #fff;
    background-color: #aaa;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    padding: 0 18px;
    display: inline-block;
    margin: 0 0 0 10px;
    transition: all 0.23s ease-in-out 0s;
  }
  #mc_embed_signup .button:hover {
    cursor: pointer;
  }
  #mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em 0.5em 0em 0.5em;
    overflow: hidden;
    width: 90%;
    margin: 0 5%;
    clear: both;
  }
  #mc_embed_signup div.response {
    margin: 1em 0;
    padding: 1em 0.5em 0.5em 0;
    font-weight: bold;
    float: left;
    top: -1.5em;
    z-index: 1;
    width: 80%;
  }
  #mc_embed_signup #mce-error-response {
    display: none;
  }
  #mc_embed_signup #mce-success-response {
    color: #529214;
    display: none;
  }
  #mc_embed_signup label.error {
    display: block;
    float: none;
    width: auto;
    margin-left: 1.05em;
    text-align: left;
    padding: 0.5em 0;
  }
  @media (max-width: 768px) {
    #mc_embed_signup input.email {
      width: 80%;
      margin-bottom: 5px;
    }
    #mc_embed_signup .clear {
      display: block;
      width: 100%;
    }
    #mc_embed_signup .button {
      width: 80%;
      margin-left: 0;
      margin: 0;
    }
  }

  #mc_embed_signup {
    background: #fff;
    clear: left;
    font-size: 16px;
    width: 100%;

    p {
      color: #aaa;
    }

    #mce-EMAIL {
      min-height: 20px;
      height: 45px;
      border: 1px solid #ddd;
    }

    #mc-embedded-subscribe {
      height: 45px;
    }
  }
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const FooterLogo = styled.img`
  margin: auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0 20px 0 0;

      &:hover {
        filter: hue-rotate(45deg);
      }
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
