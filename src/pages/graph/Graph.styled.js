import { CSVLink } from 'react-csv';
import styled from 'styled-components';

export const MainContainer = styled.main``;

export const CSVButton = styled(CSVLink)`
  color: #fff;
  text-decoration: none;
  &:active {
    background-color: #fff;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

export const Wrap = styled.div`
  header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.25rem;
    background-color: rgba(39, 127, 242);
    z-index: 10;

    .headerContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 8px;
      color: #fff;

      .leftContainer {
        display: flex;
        svg {
          cursor: pointer;
          &:first-child {
            margin-right: 0.625rem;
          }
          &:active {
            color: #d1d1d1;
          }
        }
      }

      .rightContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-right-container {
          display: flex;
          padding-right: 15px;
        }

        button {
          color: white;
          margin-right: 1.563rem;
          border: 2px solid #fff;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.mainBlue};
          font-weight: 700;
          font-size: 1rem;
          transition: 500ms;

          @media screen and (max-width: ${({ theme }) => theme.surfaceDuo}) {
            margin-right: 0.938rem;
          }
          cursor: pointer;
          &:active {
            background-color: #fff;
            color: ${({ theme }) => theme.mainBlue};
          }
        }
        .calendar-box {
          color: #fff;
          font-size: 1.563rem;
          font-weight: 700;
          &:active {
            color: #d1d1d1;
          }

          span {
            cursor: pointer;
            @media screen and (max-width: ${({ theme }) => theme.iPhoneXr}) {
              display: none;
            }
          }
          svg {
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }

  ${MainContainer} {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

    .graph-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title {
      margin-top: 6.25rem;
      text-align: center;

      &:first-child {
        margin-top: 9.375rem;
      }

      span {
        display: inline-block;
        width: 3.125rem;
        padding: 8px;
        background-color: #1c74e8;
        border-radius: 30px;
        color: #fff;
        font-weight: 700;
        font-size: 1.25rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
      }
    }

    .graphBox {
      width: 800px;
      margin-top: 1.25rem;
      margin-bottom: 3.125rem;
      padding: 1.875rem;
      border-radius: 1.25rem;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);

      @media screen and (max-width: 900px) {
        width: 600px;
      }
      @media screen and (max-width: 720px) {
        width: 400px;
      }
      @media screen and (max-width: ${({ theme }) => theme.iPhoneXr}) {
        width: 250px;
      }
    }

    .empty-data {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 72px;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 2.5rem;

      @media screen and (max-width: ${({ theme }) => theme.surfaceDuo}) {
        font-size: 1.438rem;
      }
    }
    .zoom-container {
      width: 800px;
      display: flex;
      justify-content: flex-end;
      button {
        background-color: rgba(39, 127, 242);
        color: white;
        border: 1px solid white;
        border-radius: 5px;
      }

      @media screen and (max-width: 900px) {
        width: 600px;
      }
      @media screen and (max-width: 720px) {
        width: 400px;
      }
      @media screen and (max-width: ${({ theme }) => theme.iPhoneXr}) {
        width: 250px;
      }
      @media screen and (max-width: ${({ theme }) => theme.iPhoneSe}) {
        width: 200px;
      }
    }
  }
`;
