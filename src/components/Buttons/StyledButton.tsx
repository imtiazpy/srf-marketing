import React from 'react';
import styled from 'styled-components';

export interface IStyledButton extends React.ComponentPropsWithoutRef<'div'>{
  title: string;
}

const StyledButton: React.FC<IStyledButton> = ({ className, title, ...divProps }) => {
  return (
    <ButtonWrapper>
      <button className="styled-btn">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{title}</span>
      </button>
    </ButtonWrapper>
  );
};

export default StyledButton;

const ButtonWrapper = styled.div`
  .styled-btn {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    width: 12rem;
	  height: auto;
    &:hover {
      .circle {
        width: 100%;
        border-radius: 1.625rem 1.625rem 0 1.625rem;
      }
      .arrow {
        background: #fff;
    	  transform: translate(1rem, 0);
      }
    }
  }
  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #01be96;
    border-radius: 1.625rem;
  }     
  .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }
  .arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;

    &:before {
      position: absolute;
      content: '';
      top: -0.25rem;
      right: 0.0625rem;
      width: 0.625rem;
      height: 0.625rem;
      border-top: 0.125rem solid #fff;
      border-right: 0.125rem solid #fff;
      transform: rotate(45deg);
    }
  }
  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #fff;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }
`