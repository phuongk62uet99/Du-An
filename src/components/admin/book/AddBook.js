import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AddBook() {
  //  doc them nhe
  // https://topdev.vn/blog/lam-sao-de-fetch-du-lieu-bang-react-hook/

  const { register, handleSubmit, watch, errors } = useForm();
  const [data, setData] = useState({});
  const [page_size, setPage_size] = useState({});
  const [categories, setCategories] = useState({});
  const [author, setAuthor] = useState("");
  const [category_ids, setCategory_ids] = useState([]);
  const [code, setCode] = useState("");
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  var dataFrom = {
    author: author,
    category_ids: category_ids,
    code: code,
    images: images,
    name: name,
    price: price,
    quantity: quantity,
    status: true,
  };

  const onSubmit = (data) => {
    console.log("data new : ", data);
    console.log("dataForm : ", dataFrom);
    fetch(`http://localhost:1234/api/v1/book/books/`, {
      method: "POST",
      body: JSON.stringify(data),
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

  // console.log(setData);
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
                      <input
                        className=" form-control"
                        id="lastname"
                        name="category_ids"
                        type="text"
                        ref={register}
                      />
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
