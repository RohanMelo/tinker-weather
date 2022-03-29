/// <reference types="cypress" />

const baseURL = "https://api.openweathermap.org/data/2.5";

describe("TinkerWeather e2e", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the root url and loads logo", () => {
    cy.get("#logo").should("be.visible");
  });

  it("toggles dark mode", () => {
    cy.getByTestId("main-view").should("not.have.class", "dark");
    cy.contains(/dark mode/i).click();
    cy.getByTestId("main-view").should("have.class", "dark");
  });

  it("requests weather data by city name", () => {
    cy.intercept("GET", `${baseURL}/weather?**`, { fixture: "coords.json" });
    cy.intercept("GET", `${baseURL}/onecall?**`, { fixture: "onecall.json" });
    cy.intercept("GET", `${baseURL}/onecall/timemachine?**`, {
      fixture: "pastday01.json",
    });
    cy.getByTestId("search-input").type("London");
    cy.getByTestId("search-button").click();

    cy.contains(/london, gb/i).should("be.visible");
    cy.contains(/broken clouds/i).should("be.visible");

    cy.getByTestId("additional-button").click();
    cy.contains(/wind speed/i).should("be.visible");

    cy.contains(/7 day forecast/i).should("be.visible");
    cy.contains(/rain and snow/i).should("be.visible");

    cy.contains(/past 5 days/i).should("be.visible");
  });
});
