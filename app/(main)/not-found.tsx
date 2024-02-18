"use client";
import ErrorPage from "../ui/templates/ErrorPage";
import ErrorPageAction from "../lib/actions/ErrorPageAction";

export default function NotFoundPage() {
    return <ErrorPage fetchErrorPageContent={ErrorPageAction} />
}