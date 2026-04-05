import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.localStorage.clear();
  global.fetch = undefined;
});

test("renders the bridge explorer heading and chinese navbar labels", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /桥映千年/i })).toBeInTheDocument();
  expect(screen.getAllByPlaceholderText(/搜索桥梁、地点或年份/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("button", { name: /时间轴/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /导览页/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /切换深浅模式/i })).toBeInTheDocument();
  expect(screen.getAllByText(/English/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/中文/i).length).toBeGreaterThan(0);
});

test("filters bridges by English query after language switch", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /切换到英文/i }));
  fireEvent.change(screen.getAllByPlaceholderText(/search by bridge, location, or year/i)[0], {
    target: { value: "Beijing" },
  });

  await waitFor(() => {
    expect(screen.getAllByText(/Lugou Bridge/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Jinshui Bridge/i).length).toBeGreaterThan(0);
  });
});

test("explore toolkit search button applies filters immediately", async () => {
  render(<App />);

  const searchInputs = screen.getAllByPlaceholderText(/搜索桥梁、地点或年份/i);
  fireEvent.change(searchInputs[0], { target: { value: "北京" } });
  fireEvent.click(screen.getAllByRole("button", { name: /搜索/i })[0]);

  await waitFor(() => {
    expect(screen.getAllByText(/卢沟桥|金水桥/i).length).toBeGreaterThan(0);
  });
});

test("pressing enter in the explore toolkit search input applies english search", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /切换到英文/i }));
  fireEvent.change(screen.getAllByPlaceholderText(/search by bridge, location, or year/i)[0], {
    target: { value: "Quanzhou" },
  });
  fireEvent.keyDown(screen.getAllByPlaceholderText(/search by bridge, location, or year/i)[0], {
    key: "Enter",
    code: "Enter",
  });

  await waitFor(() => {
    expect(screen.getAllByText(/Anping Bridge/i).length).toBeGreaterThan(0);
  });
});

test("recent searches can be cleared", async () => {
  render(<App />);

  fireEvent.change(screen.getAllByPlaceholderText(/搜索桥梁、地点或年份/i)[0], {
    target: { value: "北京" },
  });
  fireEvent.click(screen.getAllByRole("button", { name: /搜索/i })[0]);

  await waitFor(() => {
    expect(screen.getAllByText(/北京/i).length).toBeGreaterThan(0);
  });

  fireEvent.click(screen.getAllByRole("button", { name: /清空/i })[0]);

  expect(screen.queryByRole("button", { name: /^北京$/i })).not.toBeInTheDocument();
  expect(screen.getAllByText(/还没有搜索记录/i).length).toBeGreaterThan(0);
});

test("opens detail view from a bridge card", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /zhaozhou bridge/i }));

  expect(screen.getByText(/百度地图/i)).toBeInTheDocument();
  expect(screen.getByText(/打开全屏画廊/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /赵州桥/i })).toBeInTheDocument();
});

test("returns to explore view from detail navigation", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /zhaozhou bridge/i }));
  fireEvent.click(screen.getByRole("button", { name: /探索页/i }));

  expect(screen.getAllByPlaceholderText(/搜索桥梁、地点或年份/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/探索简报/i)).toBeInTheDocument();
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

  fireEvent.click(screen.getAllByRole("button", { name: /加入对比/i })[0]);
  fireEvent.click(screen.getAllByRole("button", { name: /加入对比/i })[1]);

  expect(screen.getAllByText(/最多选择两座桥进行对比/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/年份/i).length).toBeGreaterThan(0);
});
