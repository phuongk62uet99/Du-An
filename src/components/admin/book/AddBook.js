import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Categories from "./Categories";

export default function AddBook() {
  // https://topdev.vn/blog/lam-sao-de-fetch-du-lieu-bang-react-hook/
  // Foreach loop in return statement of react

  const { register, handleSubmit, watch, errors } = useForm();
  const [data, setData] = useState({});
  const [page_size, setPage_size] = useState({});
  const [categories, setCategories] = useState({});

  var dataFrom = {
    author: "",
    category_ids: [],
    code: "123",
    images: [],
    name: "",
    price: 0,
    quantity: 0,
    status: true,
  };
  const onSubmit = (data) => {
    dataFrom.author = data.author;
    dataFrom.category_ids.push(data.category_ids);
    dataFrom.images.push(data.images);
    dataFrom.name = data.name;
    dataFrom.price = data.price;
    dataFrom.quantity = data.quantity;
    console.log("Check ");
    var status = data.status === "true" ? true : false;
    console.log("Status : ", status);
    dataFrom.status = status;
    fetch(`http://localhost:1234/api/v1/book/books/`, {
      method: "POST",
      body: JSON.stringify(dataFrom),
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("response add book : ", response);
      })
      .catch((error) => console.log("Error : ", error));
  };

  useEffect(() => {
    fetch(`http://localhost:1234/api/v1/book/categories/`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setCategories(response.Category);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Thêm sách mới</header>
            <div className="panel-body">
              <div className="form">
                <form
                  className="cmxform form-horizontal "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Tên sách
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        id="firstname"
                        name="name"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Tác giả
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        id="firstname"
                        name="author"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="lastname"
                      className="control-label col-lg-3"
                    >
                      Loại sách
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="category_ids"
                        form="carform"
                      >
                        {/* {categories.map((cate) => (
                          <Categories cate={cate} />
                        ))} */}
                        <option value="Ngon tinh 1">Ngon tinh 1</option>
                        <option value="Ngon tinh 2">Ngon tinh 2</option>
                        <option value="Ngon tinh 3">Ngon tinh 3</option>
                        <option value="Ngon tinh 4">Ngon tinh 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="username"
                      className="control-label col-lg-3"
                    >
                      Số lượng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        id="username"
                        name="quantity"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Ảnh
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        id="password"
                        name="images"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="confirm_password"
                      className="control-label col-lg-3"
                    >
                      Giá
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        id="confirm_password"
                        name="price"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="confirm_password"
                      className="control-label col-lg-3"
                    >
                      Trạng thái
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="status"
                        form="carform"
                      >
                        <option value="true">Còn sách</option>
                        <option value="false">Hết sách </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                      <button className="btn btn-default" type="button">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
