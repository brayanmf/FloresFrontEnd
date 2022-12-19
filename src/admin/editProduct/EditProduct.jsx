/* eslint-disable react/no-array-index-key */
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {categories} from "../../mock/product";
import {
	ProductDetails,
	addProduct,
} from "../../store/adminReducer/adminReducer.action";
import {clearErrorAction} from "../../store/adminReducer/adminReducer.reducer";
import Alert from "../../components/alert/Alert";

const EditProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();

	const {loading, error, success} = useSelector((state) => state.admin);
	const [imagesPreview, setImagesPreview] = useState([]);
	const [images, setImages] = useState([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [Stock, setStock] = useState(0);
	const [bolErr, setBolErr] = useState(false);

	const registerForm = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("name", name);
		myForm.set("price", price);
		myForm.set("description", description);
		myForm.set("category", category);
		myForm.set("Stock", Stock);
		images.forEach((image) => {
			myForm.append("images", image);
		});

		dispatch(addProduct(myForm));
	};

	const createProductImagesChange = (e) => {
		const files = Array.from(e.target.files);
		setImagesPreview([]);
		setImages(files);
		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagesPreview((old) => [...old, reader.result]);
					//	setImages((old) => [...old, reader.result]);
				}
			};

			reader.readAsDataURL(file);
		});
	};

	useEffect(() => {
		dispatch(ProductDetails({id}));
	}, [id]);

	useEffect(() => {
		if (error || error !== null) {
			setBolErr(true);
			setTimeout(() => {
				dispatch(clearErrorAction());
				setBolErr(false);
			}, 2500);
		}
		if (success) {
			setTimeout(() => {
				dispatch(clearErrorAction());
				navigate("/admin/product/all");
			}, 2500);
		}
	}, [dispatch, error, success]);
	return (
		<div className="card-body w-96 drop-shadow-lg mx-auto">
			<h2 className="font-bold text-center p-5">Nuevo Producto</h2>
			{bolErr && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-3/4 mt-5 "
					message={error}
				/>
			)}
			{success && (
				<Alert
					type="alert-success"
					styleAlert="absolute  w-3/4 mt-5 "
					message="Producto creado"
				/>
			)}
			<form encType="multipart/form-data" onSubmit={registerForm}>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">
							Nombre del producto
						</span>
					</label>
					<input
						type="text"
						placeholder="ingrese su Nombre"
						className="input input-bordered"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">Precio</span>
					</label>
					<input
						type="number"
						placeholder="ingrese su Correo"
						className="input input-bordered"
						required
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">Descripción</span>
					</label>
					<textarea
						placeholder="ingrese su Contraseña"
						className="textarea textarea-bordered resize-none"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">Categorías</span>
					</label>
					<select
						className="select select-primary"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option disabled selected>
							Seleccione
						</option>
						{categories.map((el, index) => (
							<option key={index}>{el}</option>
						))}
					</select>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">Stock</span>
					</label>
					<input
						type="number"
						required
						placeholder="ingrese su Correo"
						className="input input-bordered"
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>
				<div className="divider p-5" />
				<div className="form-control">
					<label className="label">
						<span className="label-text font-bold">
							Seleccione Imagenes
						</span>
					</label>
					<div className="avatar overflow-auto">
						{imagesPreview?.map((image, index) => (
							<div className="w-20 mask mask-hexagon mx-auto ">
								<img key={index} src={image} alt="Product Preview" />
							</div>
						))}
					</div>
					<input
						type="file"
						accept="image/*"
						className="input input-bordered mt-1"
						onChange={createProductImagesChange}
						multiple={true}
						required
					/>
				</div>
				<div className="form-control mt-6">
					<button
						type="submit"
						className="btn btn-primary"
						disabled={loading ? true : false}
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProduct;
