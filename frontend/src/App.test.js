import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.localStorage.clear();
  global.fetch = undefined;
});

test("renders the bridge explorer heading", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /中国古桥/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/搜索桥梁、地点、年份/i)).toBeInTheDocument();
});

test("filters bridges by English query after language switch", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /切换到英文/i }));
  fireEvent.change(screen.getByPlaceholderText(/search by bridge, location, or year/i), {
    target: { value: "Beijing" },
  });

  expect(screen.getByText(/Lugou Bridge/i)).toBeInTheDocument();
  expect(screen.getByText(/Jinshui Bridge/i)).toBeInTheDocument();
});

test("opens detail view from a bridge card", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /zhaozhou bridge/i }));

  expect(screen.getByText(/查看地图/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /赵州桥/i })).toBeInTheDocument();
});

test("adds a custom bridge from the local admin panel", () => {
  render(<App />);
  const adminPanel = screen.getByText(/添加自定义桥梁/i).closest("section");

  fireEvent.change(within(adminPanel).getByLabelText(/英文名/i), { target: { value: "Test Bridge" } });
  fireEvent.change(within(adminPanel).getByLabelText(/中文名/i), { target: { value: "测试桥" } });
  fireEvent.change(within(adminPanel).getByLabelText(/年份/i), { target: { value: "2024" } });
  fireEvent.change(within(adminPanel).getByLabelText(/地点/i), { target: { value: "Shanghai, China" } });
  fireEvent.change(within(adminPanel).getByLabelText(/英文介绍/i), { target: { value: "A modern demo bridge." } });
  fireEvent.change(within(adminPanel).getByLabelText(/中文介绍/i), { target: { value: "一座用于测试的现代桥梁。" } });

  fireEvent.click(within(adminPanel).getByRole("button", { name: /添加桥梁/i }));

  expect(screen.getByText(/已保存到本地，后端暂不可用/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /test bridge/i })).toBeInTheDocument();
});

test("compares two bridges from the card actions", () => {
  render(<App />);

  fireEvent.click(screen.getAllByRole("button", { name: /对比/i })[0]);
  fireEvent.click(screen.getAllByRole("button", { name: /对比/i })[1]);

  expect(screen.getByText(/最多选择两座桥做快速对比/i)).toBeInTheDocument();
  expect(screen.getAllByText(/年份/i).length).toBeGreaterThan(0);
});
