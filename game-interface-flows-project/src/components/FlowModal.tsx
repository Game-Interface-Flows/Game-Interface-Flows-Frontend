import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import { ModalProps } from "../models/modal";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

const FlowModal: React.FC<ModalProps> = observer(({ show, onHide }) => {
    const { flowsStore } = useStore();
    const [title, setTitle] = useState("");
    const [source, setSource] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [interval, setInterval] = useState(3);

    const handleSubmit = () => {
        console.log({ title, source, thumbnail, video, interval });
        flowsStore.submitFlow();
    };

    if (!show) return null;

    return (
        <ModalOverlay>
            <div
                className="modal show"
                style={{ display: "block" }}
                tabIndex={-1}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <div className="modal-header">
                                <h5 className="modal-title text-uppercase">
                                    New Flow
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={onHide}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="title"
                                        className="form-label text-uppercase"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="source"
                                        className="form-label text-uppercase"
                                    >
                                        Source (link)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="source"
                                        value={source}
                                        onChange={(e) =>
                                            setSource(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="thumbnail"
                                        className="form-label text-uppercase"
                                    >
                                        Thumbnail
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="thumbnail"
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files.length > 0
                                            ) {
                                                setThumbnail(e.target.files[0]);
                                            } else {
                                                setThumbnail(null);
                                            }
                                        }}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="video"
                                        className="form-label text-uppercase"
                                    >
                                        Video
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="video"
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files.length > 0
                                            ) {
                                                setVideo(e.target.files[0]);
                                            } else {
                                                setVideo(null);
                                            }
                                        }}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="interval"
                                        className="form-label text-uppercase"
                                    >
                                        Interval ({interval})
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="interval"
                                        min="3"
                                        max="10"
                                        value={interval}
                                        onChange={(e) =>
                                            setInterval(
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                    <div className="d-flex justify-content-between">
                                        <span>3</span>
                                        <span>10</span>
                                    </div>
                                    <div className="form-text">
                                        Less interval - more time for processing
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-uppercase"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    );
});

export default FlowModal;
