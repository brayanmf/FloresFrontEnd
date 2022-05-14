import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./Profile.css";

const Profile = () => {
	const {user, loading} = useSelector((state) => state.auth);
	return loading ? (
		<Loader />
	) : (
		<div className="flex h-screen w-screen  max-w-full bg-gradient-to-t from-violet-900 content-profile">
			<div className="flex flex-col w-screen h-screen max-w-full justify-center items-center  ">
				<h2 className="text-6xl p-5">Perfil</h2>
				<div className="avatar ">
					<div className="w-2/4 mx-auto mask mask-hexagon rounded-full   transition hover:scale-105">
						<img alt="profile" src={user.avatar.url} />
					</div>
				</div>

				<Link
					to="/me/update"
					className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg glass m-5 text-white hover:scale-105 "
				>
					Editar Perfil
				</Link>
			</div>
			<div className="flex flex-col w-screen h-screen max-w-full   justify-evenly item-start ">
				<div>
					<h4 className="text-xl font-bold ">Nombres</h4>
					<p>{user.name ? user.name : user.email.split("@")[0]}</p>
				</div>
				<div>
					<h4 className="text-xl font-bold">Correo</h4>
					<p>{user.email}</p>
				</div>
				<div>
					<h4 className="text-xl font-bold">Unido</h4>
					<p>{String(user.createdAt).substring(0, 10)}</p>
				</div>
				<div className="flex flex-col w-2/4">
					<Link to="/orders" className="btn m-3">
						Mis ordenes
					</Link>
					<Link to="/password/update" className="btn m-3">
						Actualizar Contraseña
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
