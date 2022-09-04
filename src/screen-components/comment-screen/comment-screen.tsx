import React from "react";
import useQueryGetComments from "../../data-access-layer/queries/use-query-get-comments";
import { CommentForm } from "./comment-form/comment-form";
import dayjs from "dayjs";
import clsx from "clsx";

export const CommentScreen = () => {
  const { data: comments } = useQueryGetComments();

  if (!comments) return null;

  return (
    <div className="flex flex-col w-full mx-auto px-16 py-10">
      <CommentForm />
      {comments.map((comment, idx) => (
        <div
          key={comment.id}
          className={clsx([
            "flex flex-col w-1/2 mx-auto px-16 py-10 text-center rounded-lg mt-4",
            comment.type === "Pozytywny" && "bg-green-100",
            comment.type === "Negatywny" && "bg-red-100",
          ])}
        >
          <div className="flex flex-row justify-between">
            <p className="text-mg font-bold">{comment.title}</p>
            <p>{dayjs(comment.date).format("DD-MM-YYYY")} r.</p>
          </div>
          <p className="text-mg mt-4">{comment.message}</p>
          <p className="text-mg italic self-end">{comment.author}</p>
        </div>
      ))}
    </div>
  );
};
