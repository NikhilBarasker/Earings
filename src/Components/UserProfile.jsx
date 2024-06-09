import React, { useState } from "react";

export default function UserProfile() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [colorFilters, setColorFilters] = useState(["blue"]);
  const [categoryFilters, setCategoryFilters] = useState(["travel"]);
  const [sizeFilters, setSizeFilters] = useState(["40l"]);

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  const handleCheckboxChange = (filterType, value) => {
    let filters;
    switch (filterType) {
      case "color":
        filters = [...colorFilters];
        if (filters.includes(value)) {
          filters = filters.filter((filter) => filter !== value);
        } else {
          filters.push(value);
        }
        setColorFilters(filters);
        break;
      case "category":
        filters = [...categoryFilters];
        if (filters.includes(value)) {
          filters = filters.filter((filter) => filter !== value);
        } else {
          filters.push(value);
        }
        setCategoryFilters(filters);
        break;
      case "size":
        filters = [...sizeFilters];
        if (filters.includes(value)) {
          filters = filters.filter((filter) => filter !== value);
        } else {
          filters.push(value);
        }
        setSizeFilters(filters);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div>
          {mobileFiltersOpen && (
            <div
              className="relative z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25"></div>
              <div className="fixed inset-0 z-40 flex">
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={toggleMobileFilters}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {[
                        "Totes",
                        "Backpacks",
                        "Travel Bags",
                        "Hip Bags",
                        "Laptop Sleeves",
                      ].map((category) => (
                        <li key={category}>
                          <a href="#" className="block px-2 py-3">
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-0"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Color
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-mobile-0">
                        <div className="space-y-6">
                          {[
                            "white",
                            "beige",
                            "blue",
                            "brown",
                            "green",
                            "purple",
                          ].map((color, index) => (
                            <div key={color} className="flex items-center">
                              <input
                                id={`filter-mobile-color-${index}`}
                                name="color[]"
                                value={color}
                                type="checkbox"
                                checked={colorFilters.includes(color)}
                                onChange={() =>
                                  handleCheckboxChange("color", color)
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-color-${index}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-1"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Category
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-mobile-1">
                        <div className="space-y-6">
                          {[
                            "new-arrivals",
                            "sale",
                            "travel",
                            "organization",
                            "accessories",
                          ].map((category, index) => (
                            <div key={category} className="flex items-center">
                              <input
                                id={`filter-mobile-category-${index}`}
                                name="category[]"
                                value={category}
                                type="checkbox"
                                checked={categoryFilters.includes(category)}
                                onChange={() =>
                                  handleCheckboxChange("category", category)
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-category-${index}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {category.replace("-", " ")}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-mobile-2"
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">
                            Size
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-mobile-2">
                        <div className="space-y-6">
                          {["2l", "6l", "12l", "18l", "20l", "40l"].map(
                            (size, index) => (
                              <div key={size} className="flex items-center">
                                <input
                                  id={`filter-mobile-size-${index}`}
                                  name="size[]"
                                  value={size}
                                  type="checkbox"
                                  checked={sizeFilters.includes(size)}
                                  onChange={() =>
                                    handleCheckboxChange("size", size)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-size-${index}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {size.toUpperCase()}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Profiles
              </h1>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {[
                      "Totes",
                      "Backpacks",
                      "Travel Bags",
                      "Hip Bags",
                      "Laptop Sleeves",
                    ].map((category) => (
                      <li key={category}>
                        <a href="#">{category}</a>
                      </li>
                    ))}
                  </ul>
                  
                </form>
                <div className="lg:col-span-3">
                 
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
