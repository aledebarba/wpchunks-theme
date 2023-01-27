import { Button } from "@wordpress/components";

export function EditPostButton({ post_id, size, type = "primary" }) {
    const styles = type == "link" ? { padding: 0, margin: 0 } : {};
    return post_id ? (
        <Button
            variant={type}
            isSmall={size == "small"}
            href={window.location.origin +
                "/wp-admin/post.php?post=" +
                post_id +
                "&action=edit"}
            text="Editar o projeto"
            label="Selecione para editar o projeto"
            style={{ ...styles, border: "2px solid #fff3" }} />
    ) : (
        <></>
    );
}
