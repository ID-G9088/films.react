import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Films from "./Films";
import axios from "axios";
import { SET_FILMS_DATA, SET_FILMS_LOADING } from "../../store/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../components/Loading/Loading", () => () => <div data-testid="loader">Loading . .</div>);
jest.mock("../../components/Film/Film", () => (props) => {
  console.log("mock props", props);
  return (
    <div data-testid={`film-${props.film.id}`}>
      {props.film.name} -- {props.film.id}
    </div>
  );
});
jest.mock("axios");

describe("testing redux Films.js", () => {
  test("Smoke test Films.js", async () => {
    const store = mockStore({
      films: {
        data: [],
        isLoading: true,
      },
    });

    const asyncAction = axios.mockResolvedValue([
      { id: 1, name: "FILM1" },
      { id: 2, name: "Film2" },
    ]);

    render(
      <Provider store={store}>
        <Films />
      </Provider>
    );

    await asyncAction();
  });

  test("expect fetch data", async () => {
    const store = mockStore({
      films: {
        data: [],
        isLoading: true,
      },
    });

    const testFilms = {
      data: [
        { id: 1, name: "FILM1" },
        { id: 2, name: "Film2" },
      ],
    };
    const asyncAction = axios.mockResolvedValue(testFilms);

    render(
      <Provider store={store}>
        <Films />
      </Provider>
    );

    await asyncAction();
    console.log(store.getActions());
    expect(store.getActions().length).toBe(2);
    expect(store.getActions()[0].type).toBe(SET_FILMS_DATA);
    expect(store.getActions()[0].payload).toBe(testFilms.data);
    expect(store.getActions()[1].type).toBe(SET_FILMS_LOADING);
    expect(store.getActions()[1].payload).toBeFalsy();
  });
});
