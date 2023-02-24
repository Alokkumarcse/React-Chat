import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
	// import useContext from AuthContext
	const { currentUser } = useContext(AuthContext);
	// use reducer to change the user with do conversation
	const INITIAL_STATE = {
		chatId: "null",
		user: {},
	};

	const chatReducer = (state = INITIAL_STATE, action) => {
		switch (action.type) {
			case "CHANGE_USER":
				return {
					user: action.payload,
					chatId:
						currentUser.uid > action.payload.uid
							? currentUser.uid + action.payload.uid
							: action.payload.uid + currentUser.uid,
				};
			default:
				return state;
		}
	};

	// action to change the user
	const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
	return (
		<ChatContext.Provider value={{ data: state, dispatch }}>
			{children}
		</ChatContext.Provider>
	);
};
