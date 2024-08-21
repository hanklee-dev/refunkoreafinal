"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  name: yup.string().required("이름은 필수입니다"),
  email: yup
    .string()
    .email("유효한 이메일 주소를 입력해주세요")
    .required("이메일은 필수입니다"),
  subject: yup.string().required("문의 제목은 필수입니다"),
  message: yup.string().required("문의 내용은 필수입니다"),
});

type FormData = yup.InferType<typeof schema>;

export default function SupportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">고객 지원</h1>
      {!isSubmitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              이름
            </label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="이름을 입력해주세요"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              이메일
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="이메일 주소를 입력해주세요"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2">
              문의 제목
            </label>
            <input
              {...register("subject")}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="문의 제목을 입력해주세요"
            />
            {errors.subject && (
              <p className="text-red-500 mt-1">{errors.subject.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              문의 내용
            </label>
            <textarea
              {...register("message")}
              className="w-full px-3 py-2 border rounded-lg"
              rows={4}
              placeholder="문의 내용을 입력해주세요"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            문의하기
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">문의가 접수되었습니다</h2>
          <p>빠른 시일 내에 답변 드리겠습니다. 감사합니다.</p>
        </motion.div>
      )}
    </div>
  );
}
