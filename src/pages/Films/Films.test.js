import { render, screen } from "@testing-library/react";
import { Films } from "./Films";

jest.mock("../../components/Loading/Loading", () => () => <div data-testid="loader">Loading . .</div>);
jest.mock("../../components/Film/Film", () => (props) => {
  console.log("mock props", props);
  return (
    <div data-testid={`film-${props.film.id}`}>
      {props.film.name} -- {props.film.id}
    </div>
  );
});

describe("Testing Films.js", () => {
  test("SMoke test Films.js", () => {
    const { debug } = render(<Films films={[]} getFilmsData={jest.fn()} />);
  });

  test("when isLoading true expect component contain loader", () => {
    const { debug } = render(<Films films={[]} isLoading={true} getFilmsData={jest.fn()} />);
    debug();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("pass films into component, expect render films", () => {
    const getFilmsData = jest.fn();
    const testFilms = [
      { id: 1, name: "FILM1" },
      { id: 2, name: "Film2" },
    ];
    const { debug } = render(<Films films={testFilms} getFilmsData={getFilmsData} />);
    debug();
    expect(screen.getByTestId(`film-1`)).toBeInTheDocument();
    expect(screen.getByTestId(`film-2`)).toBeInTheDocument();
    expect(getFilmsData).not.toHaveBeenCalled();
  });

  test("call function getFilmsData if films data are absent", () => {
    const getFilmsData = jest.fn();
    render(<Films films={[]} getFilmsData={getFilmsData} />);

    expect(getFilmsData).toHaveBeenCalled();
  });
});
