import React, { useEffect, useState } from "react";
import ModalOverlay from "./ModalOverlay";
import { ModalProps } from "../models/modal";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";
import Select, { ActionMeta, MultiValue } from "react-select";
import { OptionType } from "../models/option";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "./Tooltip";

const FlowModal: React.FC<ModalProps> = observer(({ show, onHide }) => {
    const { flowsStore, genresStore, platformsStore } = useStore();
    const [title, setTitle] = useState("");
    const [source, setSource] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [interval, setInterval] = useState(3);
    const [selectedGenres, setSelectedGenres] = useState<
        MultiValue<OptionType>
    >([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState<
        MultiValue<OptionType>
    >([]);

    useEffect(() => {
        genresStore.loadItems();
    }, [genresStore]);

    useEffect(() => {
        platformsStore.loadItems();
    }, [platformsStore]);

    const handleGenreChange = (
        selectedOptions: MultiValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => {
        setSelectedGenres(selectedOptions);
    };

    const handlePlatformChange = (
        selectedOptions: MultiValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => {
        setSelectedPlatforms(selectedOptions);
    };

    // video restirctions
    const videoMaxSize = 1024 * 1024 * 1024;
    const videoAllowedFormats = [
        "video/mp4",
        "video/avi",
        "video/mkv",
        "video/mov",
    ];

    // thumbnail restirctions
    const thumbnailMaxSize = 10 * 1024 * 1024;
    const thumbnailAllowedFormats = ["image/jpeg", "image/png"];

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async () => {
        setIsLoading(true);
        const flow = await flowsStore.submitFlow(
            title,
            source,
            thumbnail,
            video,
            interval,
            selectedGenres,
            selectedPlatforms
        );
        setIsLoading(false);
        if (flow) {
            navigate("/personal");
            onHide();
        }
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
                                        <span className="text-primary">*</span>
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
                                    <Tooltip text="Optional field for the original video, it does not affect a flow in any way.">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="source"
                                            value={source}
                                            onChange={(e) =>
                                                setSource(e.target.value)
                                            }
                                        />
                                    </Tooltip>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="thumbnail"
                                        className="form-label text-uppercase"
                                    >
                                        Thumbnail
                                    </label>
                                    <Tooltip text="Thumbnail will be cropped to a square.">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="thumbnail"
                                            onChange={(e) => {
                                                if (
                                                    e.target.files &&
                                                    e.target.files.length > 0
                                                ) {
                                                    const file =
                                                        e.target.files[0];

                                                    if (
                                                        !thumbnailAllowedFormats.includes(
                                                            file.type
                                                        )
                                                    ) {
                                                        alert(
                                                            "Invalid file format. Please select a photo file (e.g., JPEG, PNG)."
                                                        );
                                                        e.target.value = "";
                                                        setThumbnail(null);
                                                    } else if (
                                                        file.size >
                                                        thumbnailMaxSize
                                                    ) {
                                                        alert(
                                                            "Thumbnail is too large. Maximum size is 10MB."
                                                        );
                                                        e.target.value = "";
                                                        setThumbnail(null);
                                                    } else {
                                                        setThumbnail(file);
                                                    }
                                                } else {
                                                    setThumbnail(null);
                                                }
                                            }}
                                        />
                                    </Tooltip>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="video"
                                        className="form-label text-uppercase"
                                    >
                                        Video
                                        <span className="text-primary">*</span>
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
                                                const file = e.target.files[0];

                                                if (
                                                    !videoAllowedFormats.includes(
                                                        file.type
                                                    )
                                                ) {
                                                    alert(
                                                        "Invalid file format. Please select a video file (e.g., MP4, AVI, MKV, MOV)."
                                                    );
                                                    e.target.value = "";
                                                    setVideo(null);
                                                } else if (
                                                    file.size > videoMaxSize
                                                ) {
                                                    alert(
                                                        "Video is too large. Maximum size is 500MB."
                                                    );
                                                    e.target.value = "";
                                                    setVideo(null);
                                                } else {
                                                    setVideo(file);
                                                }
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
                                        Interval ({interval} sec.)
                                    </label>
                                    <Tooltip
                                        text="Interval is time between frames to
                                        analyze. Less interval - better accuracy
                                        but slower processing."
                                    >
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
                                    </Tooltip>
                                    <div className="d-flex justify-content-between">
                                        <span>3</span>
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="genre-select"
                                        className="form-label text-uppercase"
                                    >
                                        Genres
                                    </label>
                                    <Select
                                        options={genresStore.options}
                                        value={selectedGenres}
                                        onChange={handleGenreChange}
                                        isMulti
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="platform-select"
                                        className="form-label text-uppercase"
                                    >
                                        Platforms
                                    </label>
                                    <Select
                                        options={platformsStore.options}
                                        value={selectedPlatforms}
                                        onChange={handlePlatformChange}
                                        isMulti
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                {!isLoading && (
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-uppercase"
                                    >
                                        Submit
                                    </button>
                                )}
                                {isLoading && (
                                    <div
                                        className="spinner-border align-self-center text-primary"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    );
});

export default FlowModal;
