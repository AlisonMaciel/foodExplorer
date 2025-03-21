import {styled} from "styled-components"

import {BREAK_POINTS} from "../../styles/breakPoints.js"

export const Container = styled.header`
    max-width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.Dark[700]};
    padding: 3.5rem 3.5rem 1.75rem 1.5rem;

    >svg {
      color: ${({theme}) => theme.COLORS.Light[100]};
    }

    @media (min-width: 375px) {
        .quantity {
          margin-left: -61px;
        }
    }

    @media (min-width: 425px) {
        .quantity {
          margin-left: -85px;
        }
    }

    @media (min-width: ${BREAK_POINTS.MD}) {
        padding: 1rem;

        .list {
            display: none;
        }
    
        .receipt {
            display: none;
        }

        .foodExplorerImg {
            display: none;
        }

        .span-mobile {
            display: none;
        }

    }

    img {
      cursor: pointer;
    }

    span {
        font-family: "Roboto", "sans-serif";
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.Tints.Cake[200]};
    }

    >svg {
        width: 2rem;
        height: 2.37rem;
        cursor: pointer;
    }

    .quantity {
      width: auto;
      height: 1.5rem;
      padding: 6px;
      padding-top: 0.5px;
      background-color: red;
      border-radius: 50%;
      color: white;
      text-align: center;
      margin-left: -85px;
      margin-bottom: 20px;
    }

    >svg:hover {
        filter: brightness(0.9);
    }

    .input-header {
        display: none;
    }

    .button-header {
      max-width: 12.5rem;
      padding: 3px;   
    }

    .signOut {
        display: none;
    }


    >div {
        display: none;
        width: 70.12rem;
    }

    >div {
        @media (min-width: ${BREAK_POINTS.MD}) {
            display: flex;
            align-items: center;
            margin: 0 auto;
            gap: 2rem;
            max-width: 70.12rem;
            
            .image-text-box {
                height: 2.33rem;
                display: flex;
                flex-direction: column;
                
                img {
                    margin-top: 11px;
                    margin-left: 10px;
                }

                span {
                    text-align: end;
                }
            }

            img {
                height: 1.7rem;
            }
    
            .input-header {
                display: flex;
                align-items: center;
                max-width: 36.31rem;
                margin: 0 auto;
            }

            .favorites {
                font-family: "Roboto", "sans-serif";
                font-weight: 400;
                font-size: 12px;
                line-height: 160%;
                margin: 0;
                font-weight: 400;
                font-size: 1rem;
                line-height: 100%;
                color: ${({theme}) => theme.COLORS.Light[300]};
                width: 258px;
                margin-top: 20px;
                cursor: pointer;
                display: none;
              
                &[data-favorites="true"] {
                  display: block;
                }
            }
    
            .button-header {
                display: flex;
                max-width: 18.5rem;
                margin-top: 19px;
            }
    
            .signOut {
                display: flex;
                width: 4rem;
                height: 4rem;
                cursor: pointer;
                margin-bottom: -15px;
            }

            .quantity {
              display: none;
            }
            
        }
        
        @media (max-width: 904px) {
            .input-header {
                padding: 0.38rem;
            }
            
            .button-header {
                max-width: 12.5rem;
                padding: 7px;
            }
            
            .signOut {
                display: flex;
                width: 3.62rem;
                height: 3rem;
                cursor: pointer;
            }
        }
  }

  @media (min-width: 1024px) {
    .button-header {
      max-width: 12.5rem;
      padding: 10px;
    }
  }

`

