// import React from "react";
// import PropTypes from "prop-types";
// // import { FiCheckCircle } from "react-icons/fi";
// import AddButton from "./AddButton";

// class NoteInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "",
//       body: "",
//     };

//     // this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
//     // this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
//     // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }

//   // onTitleChangeEventHandler(event) {
//   //   this.setState(() => {
//   //     return {
//   //       title: event.target.value,
//   //     };
//   //   });
//   // }

//   // onBodyChangeEventHandler(event) {
//   //   this.setState(() => {
//   //     return {
//   //       body: event.target.value,
//   //     };
//   //   });
//   // }

//   // onSubmitEventHandler(event) {
//   //   event.preventDefault();
//   //   this.props.addNote(this.state);
//   //   this.setState({
//   //     title: "",
//   //     body: "",
//   //   });
//   // }

//   onTitleChangeEventHandler = (event) => {
//     this.setState(() => {
//       return {
//         title: event.target.value,
//       };
//     });
//   };

//   onBodyChangeEventHandler = (event) => {
//     this.setState(() => {
//       return {
//         body: event.target.innerHTML,
//       };
//     });
//   };

//   onSubmitEventHandler = (event) => {
//     event.preventDefault();
//     this.props.addNote(this.state);
//     this.setState({
//       title: "",
//       body: "",
//     });
//   };

//   render() {
//     return (
//       <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
//         <input className="add-new-page__input__title" type="text" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
//         <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah ...." onChange={this.onBodyChangeEventHandler} contentEditable />
//         {/* <textarea className="add-new-page__input__body" type="text" placeholder="Sebenarnya saya adalah ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} /> */}
//         {/* <button className="add-new-page__action" type="submit">
//           <FiCheckCircle size={55} />
//         </button> */}
//         <div className="add-new-page__action">
//           <AddButton />
//         </div>
//       </form>
//     );
//   }
// }

// NoteInput.propTypes = {
//   addNote: PropTypes.func.isRequired,
// };

// export default NoteInput;

import React from "react";
import PropTypes from "prop-types";
import AddButton from "./AddButton";

function NoteInput({ addNote }) {
  const [note, setNote] = React.useState({
    title: "",
    body: "",
  });

  const onTitleChangeEventHandler = (event) => {
    setNote({ ...note, title: event.target.value });
  };

  const onBodyChangeEventHandler = (event) => {
    setNote({ ...note, body: event.target.innerHTML });
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote(note);
    setNote({
      title: "",
      body: "",
    });
  };

  return (
    <form className="add-new-page__input" onSubmit={onSubmitEventHandler}>
      <input className="add-new-page__input__title" type="text" placeholder="Catatan rahasia" value={note.title} onChange={onTitleChangeEventHandler} />
      <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah ...." onInput={onBodyChangeEventHandler} contentEditable />
      <div className="add-new-page__action">
        <AddButton />
      </div>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
