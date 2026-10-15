import { useToast } from '../../context/ToastContext.jsx';

/**
 * Link-or-button CTA with hover / focus / active styles (see .btn in global.css).
 * variant classes: "pill" | "sm" | "xs" | "out" | "blk"
 * Pass `toast` to show a confirmation message instead of navigating.
 */
export default function Button({ href, variant = '', toast, onClick, children, ...rest }) {
  const say = useToast();
  const Tag = href ? 'a' : 'button';
  const handle = (e) => {
    onClick?.(e);
    if (toast) {
      e.preventDefault();
      say(toast);
    }
  };
  return (
    <Tag
      className={`btn ${variant}`.trim()}
      href={href}
      type={href ? undefined : 'button'}
      onClick={handle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
