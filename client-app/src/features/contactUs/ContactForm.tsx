import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface IContactFormValues {
  name: string;
  email: string;
  message: string;
}

const defaultFormValues: IContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IContactFormValues>({
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: IContactFormValues) => {
    console.log(data);
  };

  return (
    <Stack width="95%" spacing={2} maxWidth={800}>
      <Typography variant="h2" color={theme.palette.primary.main}>
        Any Questions?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} my={4}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Your Name"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />

          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
export default ContactForm;
